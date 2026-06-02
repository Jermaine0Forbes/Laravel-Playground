@extends('structure')

@section('title', 'Cookies for sale')

@section('content')
    <section class="container">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>


        <form class="form"  method="post">
            <input type="hidden" name="_token" value="{{ csrf_token() }}">

            <div class="form-group">
                <label for="name">Name:</label>
                <input class="form-control col-4" type="text" name="name" value="{{$cookie->name}}">
            </div>

                <div class="form-group">
                    <label for="price">Price:</label>
                    <input class="form-control col-4" type="number" name="price" value="{{$cookie->price or 'white'}}">
                </div>


            <div class="form-group">
                <input class="btn btn-primary" type="submit"  value="submit">
            </div>
        </form>
    </section>




@endsection
