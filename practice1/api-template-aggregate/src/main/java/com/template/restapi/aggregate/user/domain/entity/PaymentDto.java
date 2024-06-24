package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

/*
*   payment_id      지불방식번호
*   payment_name    지불방식이름
*   payment_type    지불방식타입
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("PaymentDto")
public class PaymentDto {
    private Integer payment_id;
    private String payment_name;
    private String payment_type;
}
