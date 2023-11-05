using AutoMapper;
using vietqtran.Models.RequestModels.User;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Helper
{
    public class MappingProfile : Profile
    {
        public MappingProfile ( )
        {
            CreateMap<SignUpCredentials, AppUser>();
            CreateMap<LoginCredentials, AppUser>();
            CreateMap<SignUpCredentials, AppUserVM>();
        }
    }
}
