package com.rs96.d3map.Location;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor(onConstructor = @__(@Autowired))
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class LocationController {
	@NonNull
	LocationService locationService;

	@GetMapping("/locations")
	public ResponseEntity<List<LocationDto.Response>> getLocations(){
		final List<Location> locations = locationService.getLocations();
		return new ResponseEntity<>(toResponses(locations), HttpStatus.OK);
	}

	public static @NonNull List<LocationDto.Response> toResponses(
			final @NonNull List<? extends Location> locations) {
		return locations.stream().map(LocationDto.Response::new).collect(Collectors.toList());
	}

	@PostMapping("/locations/addlocation")
	public void addLocation(String name, Float latitude, Float longitude){
		locationService.addLocation(new Location(1L,"New Name",latitude,longitude));
	}
}
