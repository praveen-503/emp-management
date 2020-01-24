using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NDTC_WebAPI.Models
{
    public class Address
    {
        public int AddressId { get; set; }
        public string HouseNo { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
