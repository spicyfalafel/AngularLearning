package com.svyat.blogback.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@Document(collection = "posts")
public class Post {
    @Id
    private String id;

    private String description;
    private String title;

}
