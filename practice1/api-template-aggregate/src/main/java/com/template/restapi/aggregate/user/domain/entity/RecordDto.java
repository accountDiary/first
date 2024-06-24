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
}
