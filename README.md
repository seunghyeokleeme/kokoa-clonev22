# kokoa-clone v22

> 코코아 클론 22년도 연습

## To-do list

- 22/07/04
  - [x] #1.1 - #2.2 강의 듣기
  - [x] #2.3 - #2.11 강의 듣기
- 22/07/05
  - [x] #3.0 - #3.5 강의 듣기
- 22/07/07-7/8
  - [x] #3.6 - #3.11 강의 듣기
- 22/07/09
  - [x] #3.12 - #3.16 강의 듣기
- 22/07/10
  - [ ] #3.17 - #4.4

---

## Result

- ex) link

---

## Contributing

## TIL
- inline  elements
  - margin top & bottom X
  - padding all O
- vh = screen
- display flex
  - main axis cross axis
  - align-items: stretch;
  > div stretch (height X)
  - flex-direction
    - row (default), column, (cf: reverse)
  > main axis is horizontaliy why? because flex-direction is **row**
  
  > if flex-direction is **column** -> main axis is align-items, align-items is horizontaliy.
  - flex-wrap
- position 
  - fixed
    - on top of layout
  - relative
    - father position mov top bottom left right
  - absolute
    - relative find positon 
    - if relative is null -> body is relative
- pesudo selector
  - last-child & first-child &nth-child
  - ```css
      div span {
        color: red;
        }
      /* div 안에 span element을 찾는다.*/
      div > span  {
        color: tomato;
      }
      /* div의 direct child인 span을 찾는다. */
      div + span {
        color: teal;
      }
      /* div과 형제인 바로 밑에 있는 span을 찾는다. 만약 div 바로 밑에 형제가   span이 아니면 적용되지 않는다. 그리고 span 한 개만 적용된다.*/
      div ~ span {
        color: black;
      }
      /* div 바로 밑에 있지 않아도 형제 중에 span이 있으면 적용된다. 그리고 앞과  달리 span 여러개가 적용된다.*/
    ```
- Attributes selector
  - ```css
      input:required {
        border: 1px solid green;
      }
      /* input의 attributes 중 required가 있으면 적용된다.*/
      input:[type="email"] {
        border: 1px solid tomato;
      }
      /* attirbute와 value를  사용하려면 attr=value를 표기하면 된다. */
    ```
  

  
