using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ApiPasiona.Models
{
    public class ApiPasionaContext : DbContext
    {
        public ApiPasionaContext (DbContextOptions<ApiPasionaContext> options)
            : base(options)
        {
        }

        public DbSet<ApiPasiona.Models.Users> Users { get; set; } 
    }
}
