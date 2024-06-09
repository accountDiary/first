package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   record_id       가계부번호
*   user_id         아이디
*   payment_id      지불방식번호
*   category_id     카테고리번호
*   record_amount   지출 금액
*   record_details  지출 내용
*   record_memo     지출 메모
*   record_date     지출 날짜
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("RecordDto")
public class RecordDto {
    private Integer record_id;
    private Integer user_id;
    private Integer payment_id;
    private Integer category_id;
    private int record_amount;
    private String record_details;
    private String record_memo;
    private Date record_date;

    public Integer getRecord_id() {
        return record_id;
    }

    public void setRecord_id(Integer record_id) {
        this.record_id = record_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public Integer getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Integer payment_id) {
        this.payment_id = payment_id;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Integer category_id) {
        this.category_id = category_id;
    }

    public int getRecord_amount() {
        return record_amount;
    }

    public void setRecord_amount(int record_amount) {
        this.record_amount = record_amount;
    }

    public String getRecord_details() {
        return record_details;
    }

    public void setRecord_details(String record_details) {
        this.record_details = record_details;
    }

    public String getRecord_memo() {
        return record_memo;
    }

    public void setRecord_memo(String record_memo) {
        this.record_memo = record_memo;
    }

    public Date getRecord_date() {
        return record_date;
    }

    public void setRecord_date(Date record_date) {
        this.record_date = record_date;
    }


}
