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
            @if($table == "cookie")
                <input type="hidden" name="table" value="cookie">
            @elseif($table == "customer")
                <input type="hidden" name="table" value="customer">
            @elseif($table == "trans")
                <input type="hidden" name="table" value="cookie">
            @else
                <p>Some shit went wrong</p>
            @endif

            @if($table === "customer")
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input class="form-control col-4" type="text" name="name" value="">
                </div>

                <div class="form-group">
                    <label for="age">Age:</label>
                    <input class="form-control col-4" type="number" name="age" value="">
                </div>
            @elseif($table == "cookie")
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input class="form-control col-4" type="text" name="name" value="">
                </div>

                <div class="form-group">
                    <label for="age">Price:</label>
                    <input class="form-control col-4" type="number" name="age" value="">
                </div>
            @else
                <div class="form-group">
                    <label for="name">cookie id:</label>
                    <select class="" name="cook_id">
                        <option value=""></option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="name">Name:</label>
                    <select class="" name="cust_id">
                        <option value=""></option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="name">Name:</label>
                    <input class="form-control col-4" type="text" name="name" value="">
                </div>

            @endif

            <div class="form-group">
                <input class="btn btn-primary" type="submit"  value="submit">
            </div>
        </form>
    </section>




@endsection
