const stats = [
    { id: 1, name: 'of all food produced globally is wasted. Thats enough to feed 2 billion people!', value: '33%' },
    { id: 2, name: 'worth of food is wasted each year. Thats more money than the GDP of Switzerland!', value: '$1 trillion' },
    { id: 3, name: 'of global greenhouse gas emissions is due to food wastage. Thats more than all international flights combined! ', value: '8%' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-[antiquewhite] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-[#28183b] ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-[#e26959] sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  