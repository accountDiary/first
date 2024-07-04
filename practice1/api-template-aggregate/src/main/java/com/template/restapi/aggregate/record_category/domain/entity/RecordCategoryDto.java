package com.template.restapi.aggregate.record_category.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("RecordCategoryDto")
public class RecordCategoryDto {
    private String record_category_id;
    private String record_category_type;

    private int category_id;
    private String category_name;
}
