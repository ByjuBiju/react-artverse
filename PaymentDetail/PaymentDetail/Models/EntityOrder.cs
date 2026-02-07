namespace PaymentDetail.Models
{
    public class EntityOrder
    {
        public decimal Amount { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }

        public string TransactionId { get; set; }
        public string OrderId { get; set; }
    }
}
