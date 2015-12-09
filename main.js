export default function foo(o) {
    o.bar = 5;
    o.baz =6;
}

foo(foo);
delete foo.bar;