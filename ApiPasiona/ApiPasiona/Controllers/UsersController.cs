using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiPasiona.Models;

namespace ApiPasiona.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApiPasionaContext _context;
        private List<Users> UsedUsers = new List<Users>();

        public UsersController(ApiPasionaContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<Users> GetUsers()
        {
            return _context.Users;
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUsers([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var users = await _context.Users.FindAsync(id);

            if (users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }

        // GET: api/users/RandomUser
        [HttpGet("RandomUser")]
        public async Task<IActionResult> GetRandomUser()
        {
            var random = new Random();
            var users = new Users();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            while (users.FirstName == null || UserUsed(users.Id)){
               users = await _context.Users.FindAsync(random.Next(1, _context.Users.LastOrDefault().Id) + 1);
            }

            UsedUsers.Add(users);

            return Ok(users);
        }

        // GET: api/users/RandomUsers/5
        [HttpGet("RandomUsers/{nUsers}")]
        public async Task<IActionResult> GetRandomUsers([FromRoute] string nUsers)
        {
            var random = new Random();
            var users = new List<Users>();
            var user = new Users();
            for(int i=0; i<int.Parse(nUsers);  i++)
            {
                user = new Users();
                while (user.FirstName == null || UserUsed(user.Id))
                {
                    user = await _context.Users.FindAsync(random.Next(1, (_context.Users.Count()) + 1));
                }
                users.Add(user);
                UsedUsers.Add(user);
            }            

            return Ok(users);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsers([FromRoute] int id, [FromBody] Users users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != users.Id)
            {
                return BadRequest();
            }

            _context.Entry(users).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersExists(id))
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
        public async Task<IActionResult> PostUsers([FromBody] Users users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Users.Add(users);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new { id = users.Id }, users);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsers([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var users = await _context.Users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            _context.Users.Remove(users);
            await _context.SaveChangesAsync();

            return Ok(users);
        }

        private bool UsersExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        private bool UserUsed(int id)
        {
            return UsedUsers.Any(e => e.Id == id);
        }
    }
}