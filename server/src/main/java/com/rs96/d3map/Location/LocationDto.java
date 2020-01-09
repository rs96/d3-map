package com.rs96.d3map.Location;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Value;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
public final class LocationDto {
  LocationDto() {}

  @Value
  public static class Response {
    @NonNull Long id;
    @NonNull String name;
    @NonNull Float latitude;
    @NonNull Float longitude;

    public Response(final @NonNull Location location) {
      id = location.getId();
      name = location.getName();
      latitude = location.getLatitude();
      longitude = location.getLongitude();
    }
  }
}
