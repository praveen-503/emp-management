using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NDTC_WebAPI.Models
{
    public class Response
    {
        public string Status { set; get; }
        public string Message { set; get; }
        public User User { get; set; }
    }
}
