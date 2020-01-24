using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NDTC_WebAPI.Models;

namespace NDTC_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly NDTC_Context _context;

        public UsersController(NDTC_Context context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        [HttpPost]
        public async Task<Response> PostUser(User user)
        {
            var emailExist = _context.Users.Where(x => x.Email.Equals(user.Email)).FirstOrDefault();
            var phoneExist = _context.Users.Where(x => x.Phone.Equals(user.Phone)).FirstOrDefault();
            if(emailExist == null && phoneExist == null)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return new Response { Status = "Success", Message = "Submitted Successfully" ,User = user };
            }
            else if (emailExist != null && phoneExist != null)
            {
                return new Response { Status = "Error", Message = "Email and Phone is Already Exists" };
            }
            else if (emailExist != null)
            {
                return new Response { Status = "Error", Message = "Email is Already Exists" };
            }
            else
            {
                return new Response { Status = "Error", Message = "Phone is Already Exists" };
            }
            
           
        }

        // POST: api/Users/login
        [HttpPost("login")]
        public async Task<Response> LoginUser(CredentialsViewModel user)
        {
            var userExist = _context.Users.Where(x => x.Email.Equals(user.Email) && x.Password.Equals(user.Password)).FirstOrDefault();
            
            if (userExist == null)
            {
                return  new Response { Status = "Error", Message = "Invalid Credentials" };
               
            }
            else
            {
                var userdata = new User() { UserId = userExist.UserId,FirstName = userExist.FirstName,LastName=userExist.LastName,Email = userExist.Email,Phone = userExist.Phone, Address = userExist.Address, Gender = userExist.Gender,Dob = userExist.Dob};
                return new Response { Status = "Success", Message = "Loged in Successfully", User = userdata };
            }


        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
