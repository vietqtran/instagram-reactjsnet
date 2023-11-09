using AutoMapper;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels.User;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Helper
{
	public class MappingProfile : Profile
	{
		public MappingProfile ( )
		{
			//! User mapping
			CreateMap<User, AppUserVM>();
			CreateMap<SignUpCredentials, User>();
		}
	}
}
