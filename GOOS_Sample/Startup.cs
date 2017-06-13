using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GOOS_Sample.Startup))]
namespace GOOS_Sample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
