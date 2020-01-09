package com.rs96.d3map.Location;

import lombok.*;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
public final class LocationDto {
  LocationDto() {}

  public static final class Request {
    private Request() {}

    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @FieldDefaults(level = AccessLevel.PRIVATE)
    @Getter
    @ToString
    public static class Location {
      @Getter
      String name;

      @Getter
      Float latitude;

      @Getter
      Float longitude;
    }
  }

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
