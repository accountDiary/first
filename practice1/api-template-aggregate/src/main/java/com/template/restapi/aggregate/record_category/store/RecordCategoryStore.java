package com.template.restapi.aggregate.record_category.store;

import com.template.restapi.aggregate.record_category.domain.entity.RecordCategoryDto;
import com.template.restapi.aggregate.record_category.store.repository.RecordCategoryRepository;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RecordCategoryStore {

    public final SqlSessionTemplate sqlSessionTemplate;

    public RecordCategoryStore(SqlSessionTemplate sqlSessionTemplate) { this.sqlSessionTemplate = sqlSessionTemplate; }

    public List<RecordCategoryDto> selectSpending() {
        return sqlSessionTemplate
                .getMapper(RecordCategoryRepository.class)
                .selectSpending();
    }

    public List<RecordCategoryDto> selectIncome() {
        return sqlSessionTemplate
                .getMapper(RecordCategoryRepository.class)
                .selectIncome();
    }

    public List<RecordCategoryDto> selectSpendingIncome() {
        return sqlSessionTemplate
                .getMapper(RecordCategoryRepository.class)
                .selectSpendingIncome();
    }
}
