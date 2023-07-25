import React from 'react'
import Link from 'next/dist/client/link'
import Badge from '../Badge'

const SpanBadge = React.forwardRef((props, ref) => <Badge innerRef={ref} {...props} >{props.children}</Badge>);

export default function CategoryCard({ src, value, color }) {
  return (
    <Link href={src} passHref>
        <SpanBadge color={color}>{value}</SpanBadge>
    </Link>
  )
}
