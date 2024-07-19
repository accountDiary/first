package com.template.restapi.aggregate.payment.store.repository;

import com.template.restapi.aggregate.payment.domain.entity.PaymentDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PaymentRepository {
    List<PaymentDto> selectPayment();
}
