using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NDTC_WebAPI.Models
{
    public class User
    {
        public int UserId{ get; set; }
        public string FirstName{ get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public DateTime Dob{ get; set; }
        public Int64  Phone { get; set; }
        public string Password { get; set; }
        public Address Address { get; set; }
    }
}
