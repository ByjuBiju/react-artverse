using Microsoft.AspNetCore.Mvc;
using PaymentDetail.Models;
using Razorpay.Api;

namespace PaymentDetail.Controllers
{
    public class MyOrderController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        // 🔴 MUST BE POST
        [HttpPost]
        public ActionResult CreateOrder(EntityOrder model)
        {
            string key = "rzp_test_S9D3bMB7ELPFiO";
            string secret = "TPNwHm2HSSnw9ymH1HXwlMt9";

            Dictionary<string, object> input = new Dictionary<string, object>();
            input.Add("amount", model.Amount * 100); // Razorpay needs paise
            input.Add("currency", "INR");
            input.Add("receipt", Guid.NewGuid().ToString());

            RazorpayClient client = new RazorpayClient(key, secret);
            Order order = client.Order.Create(input);

            // 🔥 PASS THESE TO VIEW
            ViewBag.orderId = order["id"].ToString();
            ViewBag.key = key;

            return View("Payment", model);
        }

        [HttpPost]
        public ActionResult Payment(
            string razorpay_payment_id,
            string razorpay_order_id,
            string razorpay_signature)
        {
            Dictionary<string, string> attributes = new Dictionary<string, string>
            {
                { "razorpay_payment_id", razorpay_payment_id },
                { "razorpay_order_id", razorpay_order_id },
                { "razorpay_signature", razorpay_signature }
            };

            Utils.verifyPaymentSignature(attributes);

            EntityOrder order = new EntityOrder
            {
                TransactionId = razorpay_payment_id,
                OrderId = razorpay_order_id
            };

            return View("PaymentSuccess", order);
        }
    }
}
