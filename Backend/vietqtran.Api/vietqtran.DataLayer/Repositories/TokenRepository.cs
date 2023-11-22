using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Repositories
{
	public class TokenRepository : ITokenRepository
	{
		private readonly DataContext _context;

		public TokenRepository (DataContext context)
		{
			_context = context;
		}

		public Task<string> RefreshToken (string refreshToken)
		{
			throw new NotImplementedException();
		}

		public async Task ReplaceRefreshToken (string refreshToken, RefreshToken newRefreshToken)
		{
			var oldToken = _context.RefreshTokens.SingleOrDefault(x => x.Token == refreshToken);
			_context.RefreshTokens.Remove(oldToken);
			_context.RefreshTokens.Add(newRefreshToken);
			await _context.SaveChangesAsync();
		}
	}
}
