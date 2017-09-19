using Host.Contract;
using Host.Model;
using Microsoft.AspNetCore.Mvc;

namespace Host.Controllers
{
    [Route("api/[controller]")]
    public class InfoController : Controller
    {
        [HttpGet("[action]")]
        public IInfo UserInfo()
        {
            return new Info
            {
                Zodiac = 0,
            };
        }
    }
}