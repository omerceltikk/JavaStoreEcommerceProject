package com.example.StoreEcommerce.responses;


import com.example.StoreEcommerce.entities.Images;

import lombok.Data;

@Data
public class ImageResponse {
	Long imageId;
	Long productId;
	String imageUrl;
	
	public ImageResponse(Images entity) {
		this.imageId = entity.getImageId();
		this.productId = entity.getProducts().getProductId();
		this.imageUrl = entity.getImageUrl();
	}	
}
