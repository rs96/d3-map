package com.rs96.d3map.Location;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LocationService {
	@NonNull
	LocationRepository locationRepository;

	public List<Location> getLocations(){
		List<Location>  results = new ArrayList<>();
		locationRepository.findAll().forEach(results::add);
		return results;
	}

	public void addLocation(Location location){
		locationRepository.save(location);
	}
}
