using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;
using Horizones.Dtos;

namespace Horizones.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
            .ForMember(x => x.ProductBrand, o => o.MapFrom(x => x.ProductBrand.Name))
            .ForMember(x => x.ProductType, o => o.MapFrom(x => x.ProductType.Name))
            .ForMember(x => x.PictureUrl, o => o.MapFrom<ProductUrlResolver>());
    //ReverseMap maps the enties both ways (get set for example)
            CreateMap<Address, AddressDto>().ReverseMap();
        }
    }
}