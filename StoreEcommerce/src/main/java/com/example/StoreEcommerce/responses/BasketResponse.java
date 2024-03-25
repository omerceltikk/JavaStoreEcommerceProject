package com.example.StoreEcommerce.responses;


import com.example.StoreEcommerce.entities.Basket;
import com.example.StoreEcommerce.entities.Favorites;

import lombok.Data;

@Data
public class BasketResponse {
	Long basketId;
	//response needs will be added here and favorites
	public BasketResponse(Basket entity) {
		this.basketId = entity.getBasketId();

	}
}
