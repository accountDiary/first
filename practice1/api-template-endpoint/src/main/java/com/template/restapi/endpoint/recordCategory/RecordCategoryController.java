package com.template.restapi.endpoint.recordCategory;

import com.template.restapi.aggregate.record_category.domain.entity.RecordCategoryDto;
import com.template.restapi.feature.record_category.service.RecordCategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class RecordCategoryController {
    private final RecordCategoryService recordCategoryService;

    public RecordCategoryController(RecordCategoryService recordCategoryService) {
        this.recordCategoryService = recordCategoryService;
    }

    @GetMapping("/spendingIncome")
    public List<RecordCategoryDto> loadSpendingIncome() {
        return recordCategoryService.loadSpendingIncome();
    }
    @GetMapping("/spending")
    public List<RecordCategoryDto> loadSpending() {
        return recordCategoryService.loadSpendingList();
    }
    @GetMapping("/income")
    public List<RecordCategoryDto> loadIncome() {
        return recordCategoryService.loadIncomeList();
    }

}
