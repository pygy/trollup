// export {baz} from 'foolib2025/bar/baz';
// export {qux} from 'foolib2025/bar/qux';

function foo(o) {
    o.bar = 5;
    o.baz =6;
}

foo(foo);

export default foo;