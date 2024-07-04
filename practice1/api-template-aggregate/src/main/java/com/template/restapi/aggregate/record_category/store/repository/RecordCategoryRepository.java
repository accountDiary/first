package com.template.restapi.aggregate.record_category.store.repository;

import com.template.restapi.aggregate.record_category.domain.entity.RecordCategoryDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RecordCategoryRepository {
    List<RecordCategoryDto> selectSpending();
    List<RecordCategoryDto> selectIncome();
    List<RecordCategoryDto> selectSpendingIncome();
}
