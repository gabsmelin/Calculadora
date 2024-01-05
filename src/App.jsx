import './App.scss';

export default function App() {
  return (
    <div className="container">
      <div className='bloco-calc'>
        <h1>Calculadora</h1>
        <p>5+5</p>
        <table>
          <tr>
            <td><button>C</button></td>
            <td><button>&gt;</button></td>
            <td><button>/</button></td>
            <td><button>X</button></td>
          </tr>
          <tr>
            <td><button>7</button></td>
            <td><button>8</button></td>
            <td><button>9</button></td>
            <td><button>-</button></td>
          </tr>
          <tr>
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>+</button></td>
          </tr>
          <tr>
            <td><button>1</button></td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td rowSpan={2}><button>=</button></td>
          </tr>
          <tr>
            <td colSpan={2}><button>0</button></td>
            <td><button>.</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
