

using Horizones.Errors;
using Microsoft.AspNetCore.Mvc;

namespace Horizones.Controllers
{
    //[ApiController]

    [Route("errors/{code}")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : BaseAPIController
    {
        public IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}