@extends('structure')

@section('title', 'Cookies for sale')

@section('content')
    <section class="container">
        <h1> Cookie List</h1>

        @foreach($users as $cookie)

            <div class="row">
                <div class="col">
                    <h3>{{$cookie}} </h3>
                </div>
            </div>

        @endforeach


    </section>




@endsection
