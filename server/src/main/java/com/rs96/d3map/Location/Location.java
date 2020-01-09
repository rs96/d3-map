package com.rs96.d3map.Location;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.lang.NonNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor(onConstructor = @__(@Deprecated))
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Location {
	@Id
	@NonNull
	@Getter
	Long id;

	@NonNull
	@Getter
	String name;

	@NonNull
	@Getter
	Float latitude;

	@NonNull
	@Getter
	Float longitude;
}
