using AutoMapper;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile ( )
        {
            CreateMap<AppUser, AppUserVM>();
        }
    }
}
