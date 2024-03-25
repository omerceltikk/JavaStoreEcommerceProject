package com.example.StoreEcommerce.responses;


import com.example.StoreEcommerce.entities.Favorites;

import lombok.Data;

@Data
public class FavoritesActivityResponse {
	String message = "liked";
	Long favoritesId;
	public FavoritesActivityResponse(Favorites entity) {
		this.favoritesId = entity.getFavoritesId();

	}
}
