package com.template.restapi.endpoint.user.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserQueryRequest {
    private String something;

    public UserQueryRequest(String something) {
        this.something = something;
    }
}
