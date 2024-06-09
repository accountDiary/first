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

    public Integer getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Integer payment_id) {
        this.payment_id = payment_id;
    }

    public String getPayment_name() {
        return payment_name;
    }

    public void setPayment_name(String payment_name) {
        this.payment_name = payment_name;
    }

    public String getPayment_type() {
        return payment_type;
    }

    public void setPayment_type(String payment_type) {
        this.payment_type = payment_type;
    }
}
