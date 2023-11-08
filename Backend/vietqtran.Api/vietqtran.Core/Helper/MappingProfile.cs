using AutoMapper;
using vietqtran.Models.Entities;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Helper
{
	public class MappingProfile : Profile
	{
		public MappingProfile ( )
		{
			//! User mapping
			CreateMap<User, AppUserVM>();

			//! Message Mapping
			CreateMap<TextMessage, Message>();
			CreateMap<FileMessage, Message>();
			CreateMap<ReplyStoryMessage, Message>();
			CreateMap<SharePostMEssage, Message>();
			CreateMap<IconMessage, Message>();
		}
	}
}
