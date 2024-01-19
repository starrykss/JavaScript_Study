// ✏️ DOM 트리

// 1️⃣ DOM 트리와 노드
// JavaScript에서 DOM 트리 노드를 구성하는 원칙
// (1) 모든 HTML 태그는 요소 노드(Element Node)가 된다.
// (2) HTML 태그에서 사용하는 텍스트 내용은 자식 노드인 텍스트 노드(Text Node)가 된다.
// (3) HTML 태그에 있는 속성은 모두 자식 노드인 속성 노드(Attribute Node)가 된다.
// (4) 주석은 주석(Comment Node)이 된다.

//          [root element : html]
//                /              \
//     [element : head]          [element : body]
//              /                    /         \
//     [element : title]     [element : h1]   [element : img]
//              /                    |               \
//   [text : DOM TREE 알아보기] [text : Hi]      [attribute : src="images/ex1.png"]

// 2️⃣ 노드 리스트
// - querySelectAll() 메서드를 사용하면 여러 개의 노드를 한꺼번에 가져올 수 있으며, 이렇게 가져온 다양한 노드 정보는 노드 리스트(Node List)에 저장된다.
// - 노드 리스트는 배열처럼 사용할 수 있지만, 배열은 아니다.
<h1>노드 리스트</h1>
<p>HTML</p>
<p>CSS</p>
<p>JAVASCRIPT</p>

document.querySelectorAll("p");    // NodeList(3) [p, p, p] 0: p 1: p 2: p
document.querySelectorAll("p")[1]; // CSS, 첫 번째 요소에 접근