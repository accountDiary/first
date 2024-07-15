import axios from "axios";

// 수입 또는 지출 선택
export const getCategories = async () => {
    return await axios
            .get("/api/categories/spendingIncome")
            .then(response => {
                return response.data.map(option => ({
                    value: option.record_category_id,
                    label: option.record_category_type,
                }));
            })
            .catch(error => {
                console.log("Error: ", error);
            });
};

// 지출 카테고리 불러오기
export const getSpendingCategories = async () => {
    return await axios
        .get("/api/categories/spending")
        .then(response => {
            return response.data.map(option => ({
                value: option.category_id,
                label: option.category_name,
            }));
        })
        .catch(error => {
            console.log("Error: ", error);
        });
};

// 수입 카테고리 불러오기
export const getIncomeCategories = async () => {
    return await axios
        .get("/api/categories/income")
        .then(response => {
            return response.data.map(option => ({
                value: option.category_id,
                label: option.category_name,
            }));
        })
        .catch(error => {
            console.log("Error: ", error);
        });
};

//지불방식 카테고리 불러오기
export const getPaymentList = async () => {
    return await axios
        .get("/api/payment/list")
        .then(response => {
            return response.data.map(option => ({
                value: option.payment_id,
                label: option.payment_type,
            }));
        })
        .catch(error => {
            console.log("Error: ", error);
        });
}