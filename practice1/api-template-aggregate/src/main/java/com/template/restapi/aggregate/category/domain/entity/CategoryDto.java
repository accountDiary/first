package com.template.restapi.aggregate.category.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

/*
*   category_id     카테고리번호
*   category_name   카테고리이름
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("CategoryDto")
public class CategoryDto {
    private int category_id;
    private String category_name;
}
