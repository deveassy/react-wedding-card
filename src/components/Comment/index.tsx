import React, { useState } from "react";
import {
  Container,
  FormBox,
  TextInput,
  SubmitBtn,
  CommentOutput,
} from "./styles";

export default function Comment() {
  return (
    <Container>
      <FormBox onSubmit={handleSubmit}>
        <CommentOutput>
          <p>이미미 : 결혼 축하해~!</p>
        </CommentOutput>
        <TextInput
          placeholder="댓글 달기..."
          value={value}
          onChange={handleChange}
        />
        <SubmitBtn type="submit">게시</SubmitBtn>
      </FormBox>
    </Container>
  );
}
