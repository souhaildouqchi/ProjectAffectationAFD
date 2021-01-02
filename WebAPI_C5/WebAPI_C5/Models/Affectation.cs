using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_C5.Models
{
    public class Affectation
    {
        public int ProjectId { get; set; }
        public Project Project { get; set; }

        public int ConsultantId { get; set; }
        public Consultant Consultant { get; set; }
    }
}
