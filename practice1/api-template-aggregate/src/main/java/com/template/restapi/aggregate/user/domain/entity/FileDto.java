package com.template.restapi.aggregate.user.domain.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

/*
*   file_id         파일 아이디
*   post_id         게시글번호
*   file_board      사진
*   file_regDate    등록날짜
* */

@Getter
@Setter
@Data
@NoArgsConstructor
@Alias("FileDto")
public class FileDto {
    private Integer file_id;
    private Integer post_id;
    private String file_board;
    private Date file_regDate;

    public Integer getFile_id() {
        return file_id;
    }

    public void setFile_id(Integer file_id) {
        this.file_id = file_id;
    }

    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
    }

    public String getFile_board() {
        return file_board;
    }

    public void setFile_board(String file_board) {
        this.file_board = file_board;
    }

    public Date getFile_regDate() {
        return file_regDate;
    }

    public void setFile_regDate(Date file_regDate) {
        this.file_regDate = file_regDate;
    }
}
