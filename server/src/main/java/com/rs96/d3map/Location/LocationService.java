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
@FieldDefaults(level = AccessLevel.PRIVATE)
public class LocationService {
	@NonNull final LocationRepository locationRepository;
	Long lastId = 0L;

	public List<Location> getLocations(){
		List<Location>  results = new ArrayList<>();
		locationRepository.findAll().forEach(results::add);
		return results;
	}

	public Location addLocation(String name, Float latitude, Float longitude){
		Location location = new Location(nextId(),name,latitude,longitude);
		return locationRepository.save(location);
	}

	private Long nextId(){
		lastId++;
		return lastId;
	}
}
