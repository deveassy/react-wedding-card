import { ReactElement } from "react";

export interface ILayout {
  /* 헤더 랜더 함수 */
  renderHeader?: () => ReactElement;
  /* 푸터 랜더 함수 */
  renderFooter?: () => ReactElement;
}
