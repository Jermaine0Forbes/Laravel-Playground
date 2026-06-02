@extends('structure')

@section('title', 'Cookies for sale')

@section('content')
    <section class="container">
        <h1> Cookie List</h1>

        @foreach($trans as $t)

            <div class="row">
                <div class="col">
                    <h3>{{$t->trans_id}} : {{$t->cookie->name}}</h3>
                    <h4>Bought by {{$t->customer->name}}</h4>
                </div>
            </div>

        @endforeach


    </section>




@endsection
